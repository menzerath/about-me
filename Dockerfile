FROM node:10.7.0-alpine
LABEL maintainer="Marvin Menzerath <github@marvin-menzerath.de>"

RUN apk --no-cache upgrade && \
    apk --no-cache add curl

WORKDIR /app/
COPY . /app/

EXPOSE 80
HEALTHCHECK --timeout=5s CMD curl --fail http://localhost:80 || exit 1
ENTRYPOINT ["/usr/local/bin/npm", "start"]
