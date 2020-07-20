# SSH SETUP

## X11 FORWARD
- Enable X11 forward in sshd_config.
- Add ForwardX11Trusted yes to ssh config file.

## Blank screen in Chrome
When running headed tests with X11 forwarding in Cypress v4 you might see a blank (mostly Chrome) screen. Try disabling memory sharing by setting the following environment variables.

- export QT_X11_NO_MITSHM=1
- export _X11_NO_MITSHM=1
- export _MITSHM=0


## Code coverage
npx nyc report --reporter=text-summary