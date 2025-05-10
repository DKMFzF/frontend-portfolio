up:
	docker-compose up -d --build

down:
	docker-compose down

restart: down up

logs:
	docker-compose logs -f

clean:
	docker-compose down -v
	docker system prune -a -f
