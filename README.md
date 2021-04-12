"# ratio-competencies-test" 

TODO: неактуально, обновить


## Код для вставки на страницу


```
<script src="https://embed.typeform.com/embed.js"></script>
<script src="https://pay.zaresh.ai/static/script_minified.js"></script>
```

И на странице должен быть элемент с id ratio-competence-test, например

```
<div style="height: 800px; display: flex; align-items: center; justify-content: center;" id="ratio-competence-test"></div>

```


## Запуск

```

docker-compose up -d
docker-compose exec server make migrate


cd simple_server
node simple_express_server.js
```

Логи:

docker-compose logs --tail=100 server

>>>>>>> 15a0ba543a6421605242286080f00840f76dbffe
