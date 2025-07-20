from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import claims, compliance, routing
import uvicorn

app = FastAPI(
    title="Smart Claims Processing API",
    description="AI-powered backend for insurance claim automation",
    version="1.0.0"
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(claims.router, prefix="/claims", tags=["Claims"])
app.include_router(compliance.router, prefix="/compliance", tags=["Compliance"])
app.include_router(routing.router, prefix="/routing", tags=["Routing"])

@app.get("/")
def read_root():
    return {"message": "Smart Claims API is running 🚀"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
