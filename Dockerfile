# =========================
# 1단계: Build
# =========================
FROM node:20 AS build

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 설치를 위한 의존성 파일 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm ci

# 소스 코드 복사
COPY . .

# TypeScript + React 빌드
RUN npm run build
RUN  npm install -g serve
 


CMD ["serve","-s","build" ]

# =========================
# 2단계: Production
# =========================
#FROM nginx:alpine

# 빌드 결과물을 Nginx html 디렉토리로 복사
#COPY --from=build /app/build /usr/share/nginx/html

# 필요시 커스텀 Nginx 설정 복사
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# 컨테이너 시작 시 Nginx 실행
#CMD ["nginx", "-g", "daemon off;"]

