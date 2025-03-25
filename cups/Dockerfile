FROM ubuntu:latest
RUN apt update && apt install -y cups cups-bsd avahi-daemon
COPY cupsd.conf /etc/cups/cupsd.conf
CMD ["cupsd", "-f"]
