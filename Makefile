.PHONY: up init down clean serve test

up:
	make init
	docker compose -f docker-compose_airflow.yaml -f compose.yaml up -d
	make serve

init:
	docker compose -f docker-compose_airflow.yaml up airflow-init

down:
	docker compose -f docker-compose_airflow.yaml -f compose.yaml down

clean:
	make stop
	docker volume rm $(shell docker volume ls -qf dangling=true)
	docker rmi $(shell docker images -qf dangling=true)

serve:
	uvicorn api.main:app --reload

test:
	while read line; do echo $$line | xargs http; done < test_main.http

