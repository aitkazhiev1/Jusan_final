FROM maven:3-openjdk-17

COPY . /app
WORKDIR /app
RUN chmod +x ./mvnw
RUN mvn install

EXPOSE 8081
CMD ["mvn", "spring-boot:run"]
