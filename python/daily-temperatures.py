def dailyTemperatures(temperatures):
	stack = []
	answer = [0] * len(temperatures)
	for i, t in enumerate(temperatures):
		while stack and t > temperatures[stack[-1]]:
			j = stack.pop()
			answer[j] = i - j

		stack.append(i)

	
	return answer
