FROM openjdk:8
RUN mkdir /opt/projetoarce-api


ADD target/projetoarce-1.0.0.jar /opt/projetoarce-api/projetoarce-1.0.0.jar
COPY wait-for-it.sh /opt/projetoarce-api/wait-for-it.sh
RUN ["chmod", "+x", "/opt/projetoarce-api/wait-for-it.sh"]
RUN apt-get update && apt-get install netcat -y
WORKDIR /opt/projetoarce-api/

EXPOSE 8080 8081 8082


#ENTRYPOINT /bin/sh
#ENTRYPOINT ["java", "-jar", "projetoarce-1.0.0.jar"]
#CMD ["java", "-jar", "projetoarce-1.0.0.jar"]