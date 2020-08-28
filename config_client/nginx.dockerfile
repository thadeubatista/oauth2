FROM nginx:latest

#Copia a pasta build para o nginx
COPY /build /var/www/public/build

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443 3000 8080
ENTRYPOINT [ "nginx" ]
CMD [ "-g", "daemon off;" ]

