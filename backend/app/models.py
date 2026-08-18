from pydantic import BaseModel, Field
from typing import List, Optional

class HabitBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=100)

class HabitCreate(HabitBase):
    pass

class HabitToggle(BaseModel):
    date_str: str

class Habit(HabitBase):
    id: str
    created_at: str
    completed_dates: List[str] = []

class AnalyticsSummary(BaseModel):
    total_habits: int
    overall_weekly_progress: float