# rollbian-web

Source for the [Rollbian](https://rollbian.org) website — a rolling-release Debian-based Linux distribution.

Plain HTML, CSS, and JavaScript. No build step.

## Structure

```
index.html      Homepage
about.html
download.html
docs.html
sra.html        Source Repositories for Applications
css/style.css
js/main.js
```

## Running locally

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080.

## License

MIT — see [LICENSE](LICENSE).
