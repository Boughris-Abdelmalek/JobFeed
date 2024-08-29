package main

import (
	"github.com/Boughris-Abdelmalek/JobFeed/server/database"
	"github.com/Boughris-Abdelmalek/JobFeed/server/internal/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	database.ConnectDB()

	// Set up router
	routes.SetupRoutes(router)

	// Start server
	router.Run("localhost:6060")
}
