#include <iostream>
using namespace std;

int N, B;
string ans;

char Change(int a) {
	char temp;
	if (a < 10) return temp = a + '0';
	a -= 10;
	return temp = a + 'A';
}
void MakeAns(int x) {
	if (x == 0) return;
	MakeAns(x / B);
	ans += Change(x % B);
}
int main() {
	ios_base::sync_with_stdio(false); 
	cout.tie(NULL);
	cin.tie(NULL);

	cin >> N >> B;
	MakeAns(N);
	cout << ans << '\n';

	return 0;
}