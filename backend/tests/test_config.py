from app.core.config import Settings


def test_cors_origins_are_parsed_from_comma_separated_string() -> None:
    settings = Settings(cors_origins="http://a.test, http://b.test")
    assert settings.cors_origins == ["http://a.test", "http://b.test"]


def test_database_url_is_normalised_for_psycopg() -> None:
    settings = Settings(database_url="postgresql://u:p@host:5432/db")
    assert settings.sqlalchemy_database_url == "postgresql+psycopg://u:p@host:5432/db"
