FROM maven:3.9.9-eclipse-temurin-17 AS build

WORKDIR /workspace/backend
COPY backend/pom.xml backend/settings.xml ./
COPY backend/src ./src
RUN mvn -s settings.xml -DskipTests package

FROM eclipse-temurin:17-jre

WORKDIR /app
COPY --from=build /workspace/backend/target/bloomletter-backend-0.0.1-SNAPSHOT.jar backend/app.jar
COPY *.html ./
COPY css ./css
COPY js ./js
COPY images ./images

WORKDIR /app/backend
EXPOSE 8080
CMD ["sh", "-c", "java ${JAVA_OPTS:-} -Dserver.port=${PORT:-8080} -jar app.jar"]
