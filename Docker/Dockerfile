FROM jenkins/jenkins:lts
USER root
# Instalar NodeJS
RUN curl -fsSL https://deb.nodesource.com/setup_23.x | bash - \
 && apt-get install -y nodejs \
&& apt-get clean
# Retorne o controle para o usuário Jenkins
USER jenkins