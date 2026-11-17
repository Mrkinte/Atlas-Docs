---
outline: deep
---

# 快速开始

这个教程将指导你如何在 `飞牛、Debian、Windows` 等主机上快速部署Atlas。

- 默认用户名：`atlas`

- 默认密码：`atlas@admin`

## 飞牛

- 下载.fpk安装包，支持x64和arm架构

- 下载地址：[Github](https://github.com/Mrkinte/Atlas/releases/latest)、[AtomGit](https://atomgit.com/marjin/Atlas/releases)（国内）

- 进入飞牛系统桌面->打开应用中心->选择手动安装（左下角）

- 默认端口：`8521`

## Debian & Ubuntu

- 系统要求：`Debian 12 +` `Ubuntu 22.04 +`

- 下载.deb安装包，支持x64和arm架构

- 下载地址：[Github](https://github.com/Mrkinte/Atlas/releases/latest)、[AtomGit](https://atomgit.com/marjin/Atlas/releases)（国内）

- 通过终端进入安装包所在目录，使用`dpkg -i <deb安装包>`进行安装（安装失败请尝试使用sudo权限或root用户），如：

``` bash
dpkg -i atlas-1.0.0-debian-amd64.deb

```

- 默认端口：`5000`

- 常用命令

``` bash
systemctl enable atlas.service    # 设置开机自启动
systemctl disable atlas.service   # 关闭开机自启动
systemctl start atlas.service     # 启动atlas
systemctl stop atlas.service      # 关闭atlas
```

- 如需卸载

``` bash
apt purge atlas         # 卸载atlas
rm -rf /opt/atlas       # 清除卸载残留
```

## Windows

- 系统要求：`Windows 10 +`

- 下载.exe安装包，支持x64架构

- 下载地址：[Github](https://github.com/Mrkinte/Atlas/releases/latest)、[AtomGit](https://atomgit.com/marjin/Atlas/releases)（国内）

- 默认端口：`5000`
