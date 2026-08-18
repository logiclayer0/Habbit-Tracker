from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "HabitTracker Pro"
    ENVIRONMENT: str = "development"
    PORT: int = 8000
    ALLOWED_ORIGINS: str = "http://localhost:8080,http://127.0.0.1:8080"

    class Config:
        env_file = ".env"

settings = Settings()