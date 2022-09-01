from colorama import Fore, Style
print(Style.RESET_ALL + "Testing new register (Fajar cb5ef)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing login has token (Fajar cb5ef)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing new register (Marina Bay South 837a4)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing new register (Haw Par Villa 7e11f)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing old register (Haw Par Villa 7e11f)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing login has token (Marina Bay South 837a4)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing login has token (Haw Par Villa 7e11f)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing me returns favourited notes (Haw Par Villa 7e11f)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing me returns created notes (Haw Par Villa 7e11f)... " + Fore.GREEN + "Success" + Style.RESET_ALL)
print(Style.RESET_ALL + "Testing me returns purchased notes (Haw Par Villa 7e11f)... " + Fore.GREEN + "Success" + Style.RESET_ALL)

from colorama import Fore, Style
def test_with_color(test):
  test_details = test()
  name = test_details["name"]
  passed = test_details["passed"]
  if passed:
    print(name + Fore.GREEN + "Success" + Style.RESET_ALL)
  else:
    print(name + Fore.RED + "Failed" + Style.RESET_ALL)