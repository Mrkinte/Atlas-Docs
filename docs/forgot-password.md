---
outline: deep
---

# 忘记密码

## 飞牛

使用`ssh`登录飞牛系统，进入软件安装路径，默认`/vol1/@appcenter/atlas-fnos/server`，执行命令`./atlas --data-dir <数据库所在目录> --reset-password <用户名>`。

```
./atlas --data-dir /vol1/@appdata/atlas-fnos --reset-password atlas
```

## Debian & Ubuntu

使用`ssh`登录Linux系统，如果没有修改过数据目录，执行命令`atlas --reset-password <用户名>`。

```
atlas --reset-password atlas
```
否则执行命令`./atlas --data-dir <数据库所在目录> --reset-password <用户名>`

## 忘记用户名

使用参数`--user-info`查看。
