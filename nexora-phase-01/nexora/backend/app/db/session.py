from collections.abc import Iterator
from functools import lru_cache

from sqlalchemy import Engine, create_engine
from sqlalchemy.orm import Session, sessionmaker

from app.core.config import get_settings


@lru_cache
def get_engine() -> Engine:
    """Create the engine lazily so the app and tests can start without a database."""
    url = get_settings().sqlalchemy_database_url
    if not url:
        raise RuntimeError("DATABASE_URL is not configured.")
    return create_engine(url, pool_pre_ping=True)


@lru_cache
def get_sessionmaker() -> sessionmaker[Session]:
    return sessionmaker(bind=get_engine(), autoflush=False, expire_on_commit=False)


def get_db() -> Iterator[Session]:
    """FastAPI dependency that yields a database session."""
    with get_sessionmaker()() as session:
        yield session
