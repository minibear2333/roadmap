# 使用 Node.js v14 作为基础镜像
FROM node:14

# 将工作目录设置为 /app
WORKDIR /app

# 将当前目录的所有内容复制到 /app 中
COPY . .

# 安装依赖
RUN npm install

# 构建应用
RUN npm run build

# 将 VuePress 服务监听的端口暴露出来
EXPOSE 8080

# 运行命令启动 VuePress
CMD ["npm", "run", "dev"]
