def is_palindrome(x):
    str_x = str(x)
    reversed_str_x = str_x[::-1]
    return str_x == reversed_str_x

x = 121
print(is_palindrome(x))