FROM nginx:stable
RUN printf 'server {\n\
        listen       80;\n\
        listen  [::]:80;\n\
        server_name  localhost;\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        location / {\n\
           try_files $uri $uri/ /index.html?$query_string;\n\
        }\n\
        location = /50x.html {\n\
           root   /usr/share/nginx/html;\n\
        }\n\
}' > /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html