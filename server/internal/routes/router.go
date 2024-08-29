package routes

import (
	"github.com/Boughris-Abdelmalek/JobFeed/server/internal/handlers"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/jobs", handlers.GetJobs)
}
