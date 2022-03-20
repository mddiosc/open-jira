# Next.js OpenJira App

Para arrancar en local, se necesita la base de datos

```
docker-compose up -d
```

MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## LLenar la base de datos con información de pruebas

Llamar a:

```
localhost:3000/api/seed
```
