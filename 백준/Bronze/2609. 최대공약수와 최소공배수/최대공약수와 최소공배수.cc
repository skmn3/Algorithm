#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int lcm(int a, int b)
{
	if (b == 0)
		return a;
	else
		return lcm(b, a % b);
}

int main()
{
	int a, b, tmp;

	scanf("%d %d", &a, &b);

	if (a < b) {
		tmp = b;
		b = a;
		a = tmp;
	}

	printf("%d\n%d\n", lcm(a, b), (a * b) / lcm(a, b));

	return 0;
}