import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Read allowed frontend origins from the environment variable
cors_origins = os.getenv(
    "CORS_ORIGINS",
    "http://localhost:3000"
)

origins = [
    origin.strip()
    for origin in cors_origins.split(",")
    if origin.strip()
]

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}