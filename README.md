# lier-admin-layout

lier-admin-layout

## docker 部署

### Dockerfile

> 构建镜像

```shell
docker build -t <your docker image name> -f ./Dockerfile .
```

> 启动

```shell
# 控制台启动
docker-compose -f docker-compose.yml up
# 后台启动
docker-compose -f docker-compose.yml up -d
```

> 查看运行情况

```shell
docker-compose -f docker-compose.yml ps
# 或者
docker ps
```

> 访问 lier-admin-layout 服务
> . http://localhost:28080/
