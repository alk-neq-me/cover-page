from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from models import Note
import datetime




tags_metadata = [
    {
        "name": "root",
        "description": "This is root, This is use for frontend React!"
    }
]

description = """
My API helps you do awesome stuff. 🚀

## Notes

[Use Fetch API TypeScript](https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript
)

You can **read Note** and **create** and **delete**.

__but__ _not including database_
"""


app = FastAPI(
    title="Fast and first FARM Stack",
    description=description,
    version="0.0.1",
    contact={
        "name": "Aung Koko Lwin",
        "email": "toyko2001@gmail.com",
    },
    license_info={
        "name": "MIT",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
    openapi_tags=tags_metadata,
)

origins = [
    "https://coverxyz.herokuapp.com",
    "http://localhost:3000",
    "http://127.0.0.1:8000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.mount("/static", StaticFiles(directory="frontend/build/static", html=True), name="static")
templates = Jinja2Templates(directory="frontend/build")

notes = []

@app.get("/")
async def serve_spa(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/api", tags=["root"])
async def index() -> dict:
    return {
        "title": "WHAT IS COMING IS BETTER THAN WHAT IS GONE",
        "developer": "Aung Koko Lwin",
        "date": datetime.datetime.now().year
    }


@app.get("/api/notes")
async def get_notes() -> dict:
    return notes


@app.post("/api/create-notes")
async def create_note(note: Note):
    notes.append(note)
    return note.dict()
