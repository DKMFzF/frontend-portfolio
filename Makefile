up:
	docker compose build --force-rm --no-cache
	docker compose up -d

up-dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d

down:
	docker compose down

restart: down up

logs:
	docker-compose logs -f

clean:
	docker-compose down -v
	docker system prune -a -f
