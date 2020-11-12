import eel
import pyowm

eel.init("web")

owm = pyowm.OWM("9e57f44466e5d94bb651214cb229db35")

@eel.expose
def get_weather(place):
	try:
		mgr = owm.weather_manager()

		ob = mgr.weather_at_place(place)
		w = ob.weather

		temp = w.temperature('celsius')

		return temp

	except:
		return {'err': 'Регеон не найден'}


eel.start("main.html", size=(700, 350))
