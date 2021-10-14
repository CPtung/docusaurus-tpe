.PHONY: build release

VERSION  = 0.0.3
ARCH    ?= armhf

build:
	docker build \
		-f $(ARCH).Dockerfile \
		-t moxa2019/thingspro-sample:$(VERSION)-$(ARCH) \
		.

release:
	docker push moxa2019/thingspro-sample:$(VERSION)-$(ARCH)