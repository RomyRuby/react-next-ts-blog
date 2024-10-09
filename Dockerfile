FROM node:18-alpine AS base

# 复制package.json文件和package-lock.json文件
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建Next.js项目
RUN npm run build

# 运行Next.js项目
CMD ["npm", "start"]