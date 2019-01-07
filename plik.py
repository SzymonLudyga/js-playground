import dis

def func(a, b):
    if a == 5 and b==10:
	print "Kod."
    else:
	print "Inny kod."

dis.dis(func)
