from pyradios import RadioBrowser

rb = RadioBrowser()

results = rb.search(country="Malawi", name_exact=True)

print(results)