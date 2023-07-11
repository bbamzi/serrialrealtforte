FROM python:3

ENV PYTHONUNBUFFERED=1

WORKDIR /app


COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 80

CMD ["python3","manage.py","runserver","0.0.0.0:80" ]



