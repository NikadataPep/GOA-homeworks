arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ]


for i in range(len(arr)):
    for j in range(len(arr[i])):
        arr[i][j] += 1  

print(arr)
