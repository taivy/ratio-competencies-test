"# ratio-competencies-test" 


## Код для вставки на страницу


```
<script src="https://embed.typeform.com/embed.js"></script>
<script src="http://64.227.43.113:3001/script_minified.js"></script>
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

