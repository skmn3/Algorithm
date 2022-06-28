#include <stdio.h>
#include <stdlib.h>

int lcm(int a, int b) {
    if (b == 0)
        return a;
    else
        return lcm(b, a % b);
}

int main() {
    int arr[101];
    int size1, size, n, k;
    long long int sum = 0;

    scanf("%d", &size1);

    while (size1--) {
        scanf("%d", &size);

        for (n = 0; n < size; n++) {
            scanf("%d", &arr[n]);
        }

        for (n = 0; n < size - 1; n++) {
            for (k = n + 1; k < size; k++) {
                sum += lcm(arr[n], arr[k]);
            }
        }

        printf("%lld\n", sum);

        sum = 0;
    }
    return 0;
}