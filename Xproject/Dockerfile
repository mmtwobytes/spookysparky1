FROM fusuf/whatsasena:latest

RUN git clone https://github.com/myworkonlygbtes/spookysparky1 /root/spookysparky1
WORKDIR /root/spookysparky/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
