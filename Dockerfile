FROM nginxinc/nginx-unprivileged
COPY /dist/qtags /usr/share/nginx/html
