from functools import lru_cache
from typing import Annotated

from pydantic import field_validator
from pydantic_settings import BaseSettings, NoDecode, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "Nexora API"
    environment: str = "development"
    debug: bool = False

    # Comma-separated in the environment, e.g. "http://localhost:3000,https://app.example.com"
    cors_origins: Annotated[list[str], NoDecode] = ["http://localhost:3000"]

    database_url: str | None = None
    redis_url: str = "redis://localhost:6379/0"

    supabase_url: str | None = None
    supabase_anon_key: str | None = None
    supabase_service_role_key: str | None = None

    @field_validator("cors_origins", mode="before")
    @classmethod
    def split_cors_origins(cls, value: object) -> object:
        if isinstance(value, str):
            return [origin.strip() for origin in value.split(",") if origin.strip()]
        return value

    @property
    def sqlalchemy_database_url(self) -> str | None:
        """Normalise a Supabase/Postgres URL for SQLAlchemy with the psycopg driver."""
        if not self.database_url:
            return None
        url = self.database_url
        for prefix in ("postgresql://", "postgres://"):
            if url.startswith(prefix):
                return "postgresql+psycopg://" + url[len(prefix):]
        return url


@lru_cache
def get_settings() -> Settings:
    return Settings()
