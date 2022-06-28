#include <iostream>
#include <string.h>
#include <algorithm>
using namespace std;

int main()
{
    string num1, num2, res;

    cin >> num1 >> num2;

    int len1 = num1.length();
    int len2 = num2.length();
    int len, ollim;

    std::reverse(num1.begin(), num1.end());
    std::reverse(num2.begin(), num2.end());

    if (len1 == len2)
        len = len1 + 1;
    else
        len = (len1 > len2) ? len1 : len2;

    int j = len1 - len2;

    if (j < 0)
    {
        while (j++)
        {
            num1.push_back('0');
        }
    }
    else
    {
        while (j--)
        {
            num2.push_back('0');
        }
    }

    ollim = 0;
    for (int i = 0;i < len; i++)
    {
        if (num1[i] == 0)
            num1[i] = '0';
        if (num2[i] == 0)
            num2[i] = '0';

            if (num1[i] == '1' && num2[i] == '1' && ollim)
            {
                res.push_back('1');
                ollim = 1;
            }
            else if (num1[i] == '1' && num2[i] == '1' && !ollim)
            {
                res.push_back('0');
                ollim = 1;
            }
            else if (num1[i] == '0' && num2[i] == '1' && ollim)
            {
                res.push_back('0');
                ollim = 1;
            }
            else if (num1[i] == '0' && num2[i] == '1' && !ollim)
            {
                res.push_back('1');
                ollim = 0;
            }
            else if (num1[i] == '1' && num2[i] == '0' && ollim)
            {
                res.push_back('0');
                ollim = 1;
            }
            else if (num1[i] == '1' && num2[i] == '0' && !ollim)
            {
                res.push_back('1');
                ollim = 0;
            }
            else if (num1[i] == '0' && num2[i] == '0' && ollim)
            {
                res.push_back('1');
                ollim = 0;
            }
            else if (num1[i] == '0' && num2[i] == '0' && !ollim)
            {
                res.push_back('0');
                ollim = 0;
            }
    }
    if (ollim)
        res.push_back('1');

    while (1)
    {
        if (res.length() == 0)
        {
            cout << "0" << endl;
            return 0;
        }
        if (res[res.length() - 1] == '0')
            res.pop_back();
        else
            break;
    }
    std::reverse(res.begin(), res.end());

    cout << res << endl;
    return 0;
}