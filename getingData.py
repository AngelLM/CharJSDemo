import re
from time import time, gmtime, strftime
from datetime import date, timedelta, datetime
import glob
import os, errno

dateNow = datetime.now()
yearNow = dateNow.strftime('%Y')
monthNow = dateNow.strftime('%m')
dayNow = dateNow.strftime('%d')


# pathDaily = 'logs/' + yearNow + '/' + monthNow + '/' + dayNow+ '/' + '*.txt'
# filesPathDaily = glob.glob(pathDaily)
# filesPathDaily.sort()
#
# Fdaily = open('js/logs/daily.txt', 'w+')
#
# for filePath in filesPathDaily:
#
# # filePath = filesPathDailyEach[0]
#     yearFile = filePath.split('/')[1]
#     monthFile = filePath.split('/')[2]
#     dayFile = filePath.split('/')[3]
#     hourFile =filePath.split('/')[4].split('_')[1].split('.')[0].split('-')[0]
#     minuteFile =filePath.split('/')[4].split('_')[1].split('.')[0].split('-')[1]
#
#
#     F = open(filePath, 'r')
#     Flines = F.read().split('\n')
#     F.close()
#     while '' in Flines: Flines.remove('')
#     while '----------' in Flines: Flines.remove('----------')
#     whereIam = ''
#     for line in Flines:
#         if line == 'Github':
#             whereIam = 'Github'
#         elif line == 'Thingiverse':
#             whereIam = 'Thingiverse'
#         elif line == 'Youtube':
#             whereIam = 'Youtube'
#         elif line == 'Hackaday':
#             whereIam = 'Hackaday'
#         elif line == 'Twitter':
#             whereIam = 'Twitter'
#         elif line == 'Google Groups':
#             whereIam = 'Google Groups'
#         elif line == 'Instagram':
#             whereIam = 'Instagram'
#         else:
#             partlines = line.split(': ')
#             Fdaily.write(whereIam + '-' + partlines[0] + '-' + partlines[1] + '-' + hourFile + ':' + minuteFile + '\n')
#
# Fdaily.close()
daysInCurrentMonth = []
for root, dirs, files in os.walk('./logs/'+yearNow+'/'+monthNow+'/', topdown=False):
    dirs.sort()
    for name in dirs:
        daysInCurrentMonth.append(name)
if len(daysInCurrentMonth) < 7:

else:
