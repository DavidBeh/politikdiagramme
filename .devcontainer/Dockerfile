FROM ghcr.io/rocker-org/devcontainer/r-ver:4.4

# Install dependencies as root
RUN apt install -y unzip

# Switch to rstudio user
USER rstudio
WORKDIR /home/rstudio
# Install Bun as rstudio
RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.2.4"
USER root