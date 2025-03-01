ARG THEME_NAME=reha-inside-theme
ARG REALM_NAME=app-realm

FROM node:20 AS theme-builder

WORKDIR /app

RUN apt-get update && \
    apt-get install -y openjdk-17-jdk maven && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build && \
    npx keycloakify build

FROM quay.io/keycloak/keycloak:26.0

ARG THEME_NAME
ARG REALM_NAME

USER root

RUN mkdir -p /opt/keycloak/providers /opt/keycloak/data/import
COPY --from=theme-builder /app/dist_keycloak/${THEME_NAME}.jar /opt/keycloak/providers/
COPY keycloak/${REALM_NAME}.json /opt/keycloak/data/import/
RUN chown -R keycloak:keycloak /opt/keycloak/providers \
    && chown -R keycloak:keycloak /opt/keycloak/data/import

USER keycloak

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--import-realm"]
