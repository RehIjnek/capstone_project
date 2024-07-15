import random
from datetime import datetime, timedelta, date
import json

NUM_ROWS = 1000
TEAM_SIZES = [5, 10, 15, 20]
BUDGET_SIZES = [10, 100, 1000, 10000]
WORKLOADS = ["light", "moderate", "heavy"]
PROJECT_DURATIONS = [1, 2, 3, 5, 8, 13]

def generate_data():
    projects = []

    for i in range(NUM_ROWS):
        project = {
            "projId": i,
            "teamSize": 0,
            "budget": 0,
            "workload": "",
            "completionTime": 0,
            "tasks": []
        }
        latest_date = date.today()
        for j in range(random.choice([1, 2, 3, 4])):
            duration_estimate = random.choice(PROJECT_DURATIONS)
            end_date = date.today() + timedelta(days=duration_estimate+1)
            latest_date = end_date if end_date > latest_date else latest_date              
            task = {
                "taskId": j,
                "description": random.choice(["Create", "Read", "Update", "Delete"]),
                "completeStatus": False,
                "personAssigned": random.choice(["Abby", "Bill", "Carolyn", "Darrel"]),
                "dueDate": end_date.isoformat(),
                "estimatedDuration": duration_estimate
            }
            project["completionTime"] += task["estimatedDuration"]
            project["tasks"].append(task)
        if project["completionTime"] <= 10:
            project["teamSize"] = random.choice([TEAM_SIZES[0], TEAM_SIZES[1]])
            project["budget"] = random.choice([BUDGET_SIZES[0], BUDGET_SIZES[1]])
            project["workload"] = WORKLOADS[0]
        elif project["completionTime"] > 10 and project["completionTime"] < 30:
            project["teamSize"] = random.choice([TEAM_SIZES[1], TEAM_SIZES[2]])
            project["budget"] = random.choice([BUDGET_SIZES[1], BUDGET_SIZES[2]])
            project["workload"] = WORKLOADS[1]
        else:
            project["budget"] = random.choice([BUDGET_SIZES[2], BUDGET_SIZES[3]])
            project["teamSize"] = random.choice([TEAM_SIZES[2], TEAM_SIZES[3]])
            project["workload"] = WORKLOADS[2]
        projects.append(project)

    return projects

json_obj = json.dumps(generate_data(), indent=4)

fileTitle = "generated" + str(NUM_ROWS) + ".json"
with open(fileTitle, "w") as outfile:
    outfile.write(json_obj)