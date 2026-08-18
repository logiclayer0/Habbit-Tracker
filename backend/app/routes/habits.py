from fastapi import APIRouter, HTTPException, status
from typing import List
import time
from datetime import datetime
from app.models import Habit, HabitCreate, HabitToggle, AnalyticsSummary
from app.database import db_store

router = APIRouter(prefix="/api/v1/habits", tags=["Habits"])

@router.get("", response_model=List[Habit])
async def get_all_habits():
    return list(db_store.values())

@router.post("", response_model=Habit, status_code=status.HTTP_201_CREATED)
async def create_habit(payload: HabitCreate):
    habit_id = f"habit-{int(time.time() * 1000)}"
    new_habit = Habit(
        id=habit_id,
        title=payload.title,
        created_at=datetime.now().strftime("%Y-%m-%d"),
        completed_dates=[]
    )
    db_store[habit_id] = new_habit
    return new_habit

@router.delete("/{habit_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_habit(habit_id: str):
    if habit_id not in db_store:
        raise HTTPException(status_code=404, detail="Habit not found")
    del db_store[habit_id]
    return None

@router.post("/{habit_id}/toggle", response_model=Habit)
async def toggle_habit_date(habit_id: str, payload: HabitToggle):
    if habit_id not in db_store:
        raise HTTPException(status_code=404, detail="Habit not found")
    
    habit = db_store[habit_id]
    if payload.date_str in habit.completed_dates:
        habit.completed_dates.remove(payload.date_str)
    else:
        habit.completed_dates.append(payload.date_str)
        
    db_store[habit_id] = habit
    return habit

@router.get("/analytics/summary", response_model=AnalyticsSummary)
async def get_analytics():
    total = len(db_store)
    return AnalyticsSummary(
        total_habits=total,
        overall_weekly_progress=0.0 if total == 0 else 100.0
    )