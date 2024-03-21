arrayData = [3,4,8,6,4,3,3,4]

def getSumArray(array):
    print(array)
    if len(array) == 0:
        return 0
    else:
        return array[0] + getSumArray(array[1:])



print(getSumArray(arrayData))

# 3 + getSumArray([4,8])
# 4 + getSumArray([8])
# 8 + getSumArray([])

def getCountArray(array):
    if len(array) == 0:
        return 0
    else:
        return 1 + getCountArray(array[1:])

print(getCountArray(arrayData))