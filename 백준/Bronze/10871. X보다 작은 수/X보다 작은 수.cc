#include <iostream>
 
using namespace std;
 
int main(int argc, char const *argv[]) {
	int N, X;
	cin >> N >> X;
 
	int arr[N];	
	for (int i = 0; i < N; i++) {
		cin >> arr[i];
	}

	for (int i = 0; i < N; i++) {
		if (arr[i] < X) {
			cout << arr[i] << " ";	
		}
	}
	return 0;
}